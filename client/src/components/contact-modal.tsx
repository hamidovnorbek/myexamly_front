import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "started";
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    institution: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData & { type: string }) => {
      const response = await apiRequest("POST", "https://platform.myexamly.uz/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Muvaffaqiyat!",
        description:
          "Qiziqishingiz uchun rahmat! Tez orada siz bilan bog‘lanamiz.",
      });

      setFormData({ name: "", phone: "", institution: "", message: "" });
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||server/index
      !formData.phone ||
      !formData.institution ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate({ ...formData, type });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full border border-border shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">
            {type === "demo" ? t.modal.requestDemo : t.modal.getStartedNow}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-opacity-80 rounded-lg transition-colors"
            data-testid="modal-close"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t.modal.fullName}</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder={t.modal.enterName}
              required
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">Telefon</Label>
            <Input
              id="number"
              type="text"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Telefon"
              required
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution">{t.modal.institutionName}</Label>
            <Input
              id="institution"
              type="text"
              value={formData.institution}
              onChange={(e) => handleInputChange("institution", e.target.value)}
              placeholder={t.modal.enterInstitution}
              required
              data-testid="input-institution"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.modal.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={t.modal.tellUsNeeds}
              className="h-24 resize-none"
              required
              data-testid="textarea-message"
            />
          </div>

          <Button
            type="submit"
            className="w-full dark:text-white"
            disabled={contactMutation.isPending}
            data-testid="button-submit"
          >
            {contactMutation.isPending ? "Sending..." : t.modal.sendMessage}
          </Button>
        </form>
      </div>
    </div>
  );
}
