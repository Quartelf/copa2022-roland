import { GroupComponent } from "./group/group.component";
import { FinalistasComponent } from "./finalistas/finalistas.component";

export const MenuItens = [
    {
        path: 'grupos',
        caption : 'Grupos',
        icon : 'bubble_chart',
        component: GroupComponent,
    },
    {
        path: 'finalistas',
        caption : 'Finalistas',
        icon : 'sports_soccer',
        component: FinalistasComponent,
    }
]