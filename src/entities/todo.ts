import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  value: z.string().min(3),
  done: z.boolean(),
  createdAt: z.number().optional(),
});

export const TodoListSchema = z.array(TodoSchema);

export type TodoItem = z.infer<typeof TodoSchema>;
export type TodoList = z.infer<typeof TodoListSchema>;



