'use client';

import { useForm } from 'react-hook-form';
import { InputFieldGroup } from '../../ui/InputField';

type TTaskForm = {
  name: string;
  description: string;
  duration: number;
  date: string;
};

const TaskForm = () => {
  const { register, handleSubmit } = useForm<TTaskForm>();
  const onSubmit = (data: TTaskForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <InputFieldGroup
          labelText="Name"
          inputProps={{
            id: 'name'
          }}
          control={register('name')}
        />
        <InputFieldGroup
          containerClassName="mt-10"
          labelText="Description"
          inputProps={{ id: 'description' }}
          control={register('description')}
        />
        <InputFieldGroup
          containerClassName="mt-10"
          inputProps={{
            type: 'number',
            id: 'duration'
          }}
          labelText="Duration"
          control={register('duration')}
        />
        <InputFieldGroup
          labelText="Date"
          containerClassName="mt-10"
          inputProps={{
            type: 'date',
            id: 'date'
          }}
          control={register('date', { disabled: false })}
        />
        <InputFieldGroup
          inputProps={{
            type: 'date',
            onChange: (e: any) => {
              console.log(e.target.value);
            }
          }}
          containerClassName="mt-10"
          labelText="Date"
        />

        <input className="mt-10" type="submit" />
      </fieldset>
    </form>
  );
};

export default TaskForm;
