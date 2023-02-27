import CreateGoal from "../../components/createGoal";
import ToDo from "../../components/todo";
import { Container, TodoContainer } from "./styles";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../../graphql/queries";
import { motion } from "framer-motion";

const Index = () => {
  const { loading, data, error } = useQuery(GET_TODOS, {
    pollInterval: 500,
  });

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>something went wrong.....</h1>;

  return (
    <Container>
      <CreateGoal />

      <TodoContainer>
        {!loading &&
          !error &&
          data &&
          data?.todos?.map((todo, i) => (
            <motion.div
              key={todo.id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ stiffness: 100, duration: 1, delay: 0.5 * i }}
            >
              <ToDo todo={todo} />
            </motion.div>
          ))}
      </TodoContainer>
    </Container>
  );
};

export default Index;
