import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Title,
  Body,
  Content,
} from 'native-base';

import Conversations from './Conversations';
import Status from './Status';
import Calls from './Calls';

const Main = () => {
  return (
    <Container>
      <Header hasTabs style={styles.backgroundWhatsappColor}>
        <Body>
          <Title style={styles.textHeader}>WhatsApp</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={styles.backgroundWhatsappColor}>
              <Text style={styles.textTab}>CONVERSAS</Text>
            </TabHeading>
          }>
          <Content>
            <Conversations />
          </Content>
        </Tab>
        <Tab
          heading={
            <TabHeading style={styles.backgroundWhatsappColor}>
              <Text style={styles.textTab}>STATUS</Text>
            </TabHeading>
          }>
          <Content>
            <Status />
          </Content>
        </Tab>
        <Tab
          heading={
            <TabHeading style={styles.backgroundWhatsappColor}>
              <Text style={styles.textTab}>CHAMADAS</Text>
            </TabHeading>
          }>
          <Calls />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  textTab: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  backgroundWhatsappColor: {
    backgroundColor: '#075354',
  },
  textHeader: {fontSize: 22, fontWeight: '100', marginLeft: 12},
});
export default Main;
