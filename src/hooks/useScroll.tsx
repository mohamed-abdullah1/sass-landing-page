"use client";
const useScrollSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const navbar = document.getElementById("header");
    if (element && navbar) {
      const navHeight = navbar?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return [scrollToSection];
};

export default useScrollSection;
