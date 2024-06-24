import {Container, Title, Text, Button, Group} from '@mantine/core';
import {Illustration} from '../../../public/assets/Illustration';
import classes from './css/NothingFoundBackground.module.css';
import {useNavigate} from "react-router-dom";
import {userRoutes} from "../../models/routes.ts";

export function NothingFoundBackground() {
  const navigate = useNavigate()
  return (

    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image}/>
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Group justify="center">
            <Button onClick={() => {navigate(userRoutes.HOMEPAGE)}} size="md">Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}

export default NothingFoundBackground;