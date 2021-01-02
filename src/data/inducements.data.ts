import type { Inducement } from "../models/inducement.model";

export const inducementData: {inducements: Inducement[]} = {
    inducements: [
        {id: 'i1', displayName: 'Temp Agency Cheerleader', cost: 20, max: 4},
        {id: 'i2', displayName: 'Part-time Assistant Coach', cost: 20, max: 3},
        {id: 'i3', displayName: 'Weather Mage', cost: 30, max: 1},
        {id: 'i4', displayName: 'Bloodweiser Keg', cost: 50, max: 2},
        {id: 'i5', displayName: 'Special Play', cost: 100, max: 5},
        {id: 'i6', displayName: 'Extra Team Training', cost: 100, max: 8},
        {id: 'i7', displayName: 'Bribe', cost: 100, reducedCost: {specialRule:'Bribery and Corruption', cost: 50}, max: 3},
        {id: 'i8', displayName: 'Wandering Apothecary', cost: 100, max: 2, requiresApothecary: true},
        {id: 'i9', displayName: 'Mortuary Assistant', cost: 100, max: 1, requiresSpecialRule: 'Sylvanian Spotlight'},
        {id: 'i10', displayName: 'Plague Doctor', cost: 100, max: 1, requiresSpecialRule: 'Favoured of Nurgle'},
        {id: 'i11', displayName: 'Riotous Rookies', cost: 100, max: 1, requiresSpecialRule: 'Low Cost Linemen'},
        {id: 'i12', displayName: 'Halfling Master Chef', cost: 300, reducedCost: {specialRule:'Halfling Thimble Cup', cost: 100}, max: 1},
        {id: 'i13', displayName: 'Mercenary Player', cost: 30, max: 16},
        {id: 'i14', displayName: 'Star Player', cost: 0, max: 2},
        {id: 'i15', displayName: '(In)Famous Coaching Staff: Josef Bugman', cost: 100, max: 1},
        {id: 'i16', displayName: 'Wizard: Hireling Sports-Wizard', cost: 150, max: 1},
        {id: 'i17', displayName: 'Biased Referee', cost: 120, reducedCost: {specialRule:'Bribery and Corruption', cost: 80}, max: 2},
    ]
}