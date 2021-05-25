import React from "react";
import { PizzaItem } from "./PizzaItem";
import * as R from "ramda";
import { connect } from "react-redux";

interface PizzaListProps {
    pizza: {
        _id: string;
        name: string;
        price: number;
    }[];
    onAdd: (_id: string) => void;
}

function pizzaList({ pizza, onAdd }: PizzaListProps): JSX.Element[] {
    return R.map((p) =>
        <PizzaItem
            key={p._id}
            _id={p._id}
            name={p.name}
            price={p.price}
            onAdd={onAdd}
        />, pizza);
}

const mapStateToProps = (state: Pick<PizzaListProps, 'pizza'>) => ({
    pizza: state.pizza
})

const mapDispatchToProps = (dispatch: any) => ({
    onAdd: () => dispatch('')
})

export default connect(mapStateToProps, mapDispatchToProps)(pizzaList)
