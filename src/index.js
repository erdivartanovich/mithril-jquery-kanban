var $ = require('webpack-jquery-ui');
require('webpack-jquery-ui/css'); 
import m from 'mithril';
import {KanbanBoard} from  './kanban-board';

const App = {
    view: function() {
        return KanbanBoard({cards: [{name: "spp"}, {name: "spm"}, {name: "sp2d"}]})
    }
}
m.mount(document.body, App);
