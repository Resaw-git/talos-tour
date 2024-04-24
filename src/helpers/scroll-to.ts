export const scrollTo = async (id: string) => {
  const checkElement = async (selector: string) => {
    while (document.getElementById(selector) === null) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  };
  await checkElement(id);
  const element = document.getElementById(id);

  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};
