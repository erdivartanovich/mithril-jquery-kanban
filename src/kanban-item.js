import m from 'mithril';
import {Stylesheet} from './styles';

const KanbanItem = function (cardItem) {
    console.log("====", cardItem)
    return m(styles.cardItem, cardItem.name)
}

const styles = new Stylesheet({
    cardItem: ".cardItem outline bg-gray"
});

export {KanbanItem}