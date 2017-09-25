import m from 'mithril';
import {Stylesheet} from './styles';
import {KanbanItem} from './kanban-item';

const KanbanCard = function (card) {
    return m(styles.card, KanbanItem(card))
}

const styles = new Stylesheet({
    card: ".card outline bg-red pv4"
});


$(function () {
    $(".card").sortable({
        revert: true,
        placeholder: 'drag-place-holder',
        forcePlaceholderSize: true,
        connectWith: ".card",
        helper: function (event, element) { return $(element).clone().addClass('dragging'); },
        start: function (e, ui) { ui.item.show().addClass('ghost') },
        stop: function (e, ui) { ui.item.show().removeClass('ghost') },
        cursor: 'move'
    }).disableSelection();
    $(".card").droppable();
});

export {KanbanCard}