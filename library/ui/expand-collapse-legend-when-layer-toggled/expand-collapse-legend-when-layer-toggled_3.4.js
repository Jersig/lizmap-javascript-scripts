/**
 * @license Mozilla Public License Version 2.0
 * This script has been developed by the "community"
 * this script will work on version 3.9 of Lizmap Web Client.
 */

lizMap.events.on({
    uicreated: function () {
        const layerTree = lizMap.mainLizmap.state.layerTree;

        layerTree.addListener((evt) => {
            const item = layerTree.findTreeLayersAndGroups()
                .find(tl => tl.name === evt.name);
            if (!item || item.type === 'group') return;

            item.expanded = !!evt.visibility;
            
            // Nouvelle tentative après que l'interface a fini de réagir au clic
            setTimeout(() => {
                item.expanded = !!evt.visibility;
            }, 300);
        }, 'layer.visibility.changed');

        // Suivre les changements d'état déplié/replié de l'arbre
        layerTree.addListener((evt) => {
        }, 'layer.expanded.changed');
    }
});
