import { Box, Button, ChakraProvider, Heading, Input, ListItem, theme, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";

export default function App() {

    const [todoList, setTodoList] = useState<string[]>([]);
    const [todoInputValue, setTodoInputValue] = useState<string>('');

    const addNewTodo = (event: React.FormEvent) => {
        event.preventDefault();
        if (todoInputValue?.length === 0) { return; }
        setTodoList([...todoList, todoInputValue]);
        setTodoInputValue('');
    }

    return (
        <ChakraProvider theme={theme}>
            <Box fontSize="xl" w="400px" m="32px auto" p="2">
                <Heading>
                    TODO APP - CRA Chakra
                </Heading>
                <UnorderedList m="6">
                    {todoList.map((todo, index) => (
                        <ListItem key={index}> {todo} </ListItem>
                    ))}
                </UnorderedList>
                <form onSubmit={(event) => addNewTodo(event)} >
                    <Input
                        placeholder="add todo..."
                        value={todoInputValue}
                        onChange={(event) => setTodoInputValue(event.target.value)}
                    />
                    <Button type="submit" colorScheme="blue" w="100px" mt="2">
                        Add
                    </Button>
                </form>
            </Box>
        </ChakraProvider>
    )
}
