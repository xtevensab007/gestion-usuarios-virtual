

export interface Users {
    name: string;
    lastName:  string;
    idDocument:   number;
    email:      string;
    password: string;
}

export interface Sites {
    userCode: number;
    icon: number;
    name:  string;
    address:   string;
}

export interface Travel {
    id: number;
    origin: string;
    destiny: string;
    cost: number;
    completed: number;
}