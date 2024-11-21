// the gols is to be able to use Todo context by just writing useContext(TodoContect)

import { useContext } from "react";
import TodoContext from "../context/Todos";

export default function useTodoContext() {
    return useContext(TodoContext)
}