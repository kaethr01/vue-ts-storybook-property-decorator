// YourComponent.stories.js

import TestButton from '../components/TestButton.vue';


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TestButton',
  component: TestButton
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { TestButton },
  data: () => ({}),
  props: Object.keys(argTypes),
  template: '<TestButton v-bind="$props"/>'
});

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
  ButtonText: 'This is the button text',
  TextAboveButton: 'This is text above the button'
}; 
   