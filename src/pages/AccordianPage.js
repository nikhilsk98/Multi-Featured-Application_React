import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "123ji",
      label: "Can I use React on a Project?",
      content: "Yes you can use it",
    },
    {
      id: "1dsf3ji",
      label: "Can I use Javascript on a Project?",
      content: "Yes you can use JS in a project ",
    },
    {
      id: "125jsdfi",
      label: "Can I use Node on a Project?",
      content: "Yes you can use Node in a project",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
