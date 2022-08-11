/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TodoList from './components/UI/TodoList';
import TodoListAddition from './components/UI/TodoListAddition';
import TodoListUpgraded from './components/UI/TodoListUpgraded';
import TaskList from './components/UI/TaskList';

const Section = ({ children, title, ui }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      {ui}
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* SECTION 1  */}
          <Section title="Intoduction">
            This is a todo list app to help me practice and better understand <Text style={styles.highlight}>React Native.</Text>
            {'\n'}
          </Section>
          {/* SECTION 1  */}

          <Section>
          {'\n'}
          </Section>

          {/* SECTION 2  */}
          <Section title="Displaying todo tasks">
            This is a list of tasks rendered using the map array method of some dummy data.
            {'\n'}
          </Section>
          <TodoList />
          {/* SECTION 2  */}

          <Section>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          </Section>

          {/* SECTION 3 */}
          <Section title="Adding new todo tasks">
            New tasks can be added.
            {'\n'}
          </Section>
          <TodoListAddition />
          {/* SECTION 3 */}

          <Section>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          </Section>

          {/* SECTION 4  */}
          <Section title="Displayed todo tasks upgraded">
            Tasks can be edited or deleted. Click the <Text style={styles.highlight}>Edit</Text> or <Text style={styles.highlight}>Delete</Text> buttons to test these features.
            {'\n'}
          </Section>
          <TodoListUpgraded />
          {/* SECTION 4  */}

          <Section>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          </Section>

          {/* SECTION 5 */}
          <Section title="Task Tracker App">
            In this final version <Text style={styles.highlight}>users can track all their tasks and progress.</Text>
            {'\n'}
          </Section>
          <TaskList />
          {/* SECTION 5 */}

          <Section>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          </Section>

          {/* NOTES SECTION */}
          <Section title="Developers Notes">

            Release 2.0 will include <Text style={styles.highlight}>Unit Testing</Text> and <Text style={styles.highlight}>E2E Testing. </Text>
            {'\n'}
            {'\n'}
            Release 3.0 will implement <Text style={styles.highlight}>Typescript.</Text>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
          </Section>

          {/* NOTES SECTION */}


          {/* <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: `${100}%`,
    height: 'auto',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
