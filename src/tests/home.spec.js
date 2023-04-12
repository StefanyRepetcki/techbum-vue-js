const { shallowMount } = require('@vue/test-utils');
const Home = require('@/views/Home.vue').default;

describe('Component.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('Tela de inicio', () => {
  it('renderizando componente da home', () => {
    const wrapper = shallowMount(Home, {
      propsData: { msg: 'QUINZENA DO CONSUMIDOR' },
    });
    expect(wrapper.text()).toMatch('QUINZENA DO CONSUMIDOR');
  });
});
