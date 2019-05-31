import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import withActiveItem from '../../hocs/with-active-item/with-actvie-item.jsx';
import withTransformProps from '../../hocs/with-transform-props/with-transform-props.jsx';

const transformSelectedToActive = (props) => ({
  selectedOffer: props.activeItem,
  onSelectOffer: props.onSelectItem,
});

const MainWrapped = withActiveItem(withTransformProps(transformSelectedToActive)(Main));

class App extends PureComponent {
  render() {
    return <MainWrapped />;
  }
}

export default App;
