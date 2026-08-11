import { useCallback, useState } from "react";

const EMPTY_CONTACT_FORM = {
  name: "",
  company: "",
  title: "",
  email: "",
  phone: "",
  message: "",
  _honey: "",
};

const validateContactForm = (formData) => {
  const newErrors = {};
  const textRegex = /^[a-zA-Z\s\-\'\.,&]+$/;
  const phoneRegex = /^[\d\s\-\+\(\)]*$/;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!formData.name) {
    newErrors.name = "Required";
  } else if (!textRegex.test(formData.name)) {
    newErrors.name = "Alphabets only";
  }

  if (!formData.company) {
    newErrors.company = "Required";
  } else if (!textRegex.test(formData.company)) {
    newErrors.company = "Alphabets only";
  }

  if (!formData.title) {
    newErrors.title = "Required";
  } else if (!textRegex.test(formData.title)) {
    newErrors.title = "Alphabets only";
  }

  if (!formData.email) {
    newErrors.email = "Required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email";
  }

  if (formData.phone && !phoneRegex.test(formData.phone)) {
    newErrors.phone = "Numbers only";
  }

  if (!formData.message) {
    newErrors.message = "Required";
  }

  return newErrors;
};

export const getInputClassName = (errors, fieldName) => {
  const baseClass =
    "w-full px-5 py-3.5 bg-white/80 border rounded-xl focus:bg-white focus:ring-2 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400";

  if (errors[fieldName]) {
    return `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-500/20`;
  }

  return `${baseClass} border-gray-200 focus:border-brand-primary focus:ring-brand-primary/20`;
};

export function useContactForm() {
  const [formData, setFormData] = useState(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: value,
      }));

      setErrors((previousErrors) => {
        if (!previousErrors[name]) {
          return previousErrors;
        }

        return {
          ...previousErrors,
          [name]: null,
        };
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const nextErrors = validateContactForm(formData);

      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
        setSubmitError("");
        return;
      }

      setSubmitError("");
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong, please try again.");
        }

        setSubmitSuccess(true);
        setFormData(EMPTY_CONTACT_FORM);
        setErrors({});
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError(error.message || "Something went wrong, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const resetSuccess = useCallback(() => {
    setSubmitSuccess(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    setErrors,
    handleChange,
    handleSubmit,
    resetSuccess,
  };
}
