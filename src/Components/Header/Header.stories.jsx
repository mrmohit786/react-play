import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    title: "Header",
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "React Playground",
};
