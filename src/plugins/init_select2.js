import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2({ width: '400px' }); // (~ document.querySelectorAll)
}

export { initSelect2 };
