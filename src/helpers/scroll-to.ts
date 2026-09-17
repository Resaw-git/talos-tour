export const scrollTo = async (id: string) => {
  if (id === "main") {
    scroll(0, 0);
    return;
  }

  const checkElement = async (selector: string) => {
    while (document.getElementById(selector) === null) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  };
  await checkElement(id);
  const element = document.getElementById(id);

  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const top = (element?.getBoundingClientRect().top ?? 0) + window.scrollY - headerHeight;

  window.scrollTo({ top, behavior: "smooth" });
};
