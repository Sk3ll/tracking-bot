import { Markup } from 'telegraf';

export const myTasksText = 'Show all my tasks';
export const createTaskText = 'Create task';

export const mainButtons = (): any => {
  return Markup.inlineKeyboard(
    [Markup.button.callback(myTasksText, 'tasks'), Markup.button.callback(createTaskText, 'createTask')],
    {
      columns: 2,
    },
  );
};
