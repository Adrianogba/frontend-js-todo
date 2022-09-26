import {listenSubmit, loadTodoList} from './handlers';

function initialize() {
    loadTodoList();
    listenSubmit();
}

initialize();