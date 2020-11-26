import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = '';
  //     console.log(title);
  //     setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title" 
        placeholder="Enter todo"
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Enter todo</label>
    </div>
  );
};
