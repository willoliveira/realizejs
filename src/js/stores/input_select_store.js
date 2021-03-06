import Reflux from 'reflux';
import InputSelectActions from '../actions/input_select_actions';

export default Reflux.createStore({
  listenables: [InputSelectActions],

  action: '',
  inputId: '',
  selectedOption: {},

  onSelect: function(inputId, selectedOption) {
    this.action = 'Select';
    this.inputId = inputId;
    this.selectedOption = selectedOption;

    this.trigger(this);
  },

  onSelectSearchValue: function(inputId) {
    this.action = 'SelectSearchValue';
    this.inputId = inputId;
    this.selectedOption = {};

    this.trigger(this);
  }
});
