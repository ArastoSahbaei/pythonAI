export const GreetUser = (props: { name: string }) => {
   return (
      <div>
         <h1>Welcome to this website {props.name}</h1>
      </div>
   )
}