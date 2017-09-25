import m from 'mithril';
import {KanbanCard} from './kanban-card';
import {Stylesheet} from './styles';

const KanbanBoard = function (vnode) {
    const cards = vnode.cards; 
    return m(styles.wrapper, 
            m(styles.container, cards.map((card)=>
                    m(styles.columnThird, 
                        KanbanCard(card)
                    )
                )
            )
    );
}

const styles = new Stylesheet({
    wrapper: ".mw9 center ph3-ns",
    container: ".cf ph2-ns",
    columnThird: ".fl w-100 w-third-ns pa2"
});

export {KanbanBoard}