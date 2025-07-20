import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice';
import coursesReducer from '../../features/courses/coursesSlice';
import notificationsReducer from '../../features/notifications/notificationsSlice';
import * as courseSlice from '../../features/courses/coursesSlice';

// Bloquer Aphrodite dans les tests
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Render custom avec provider
function renderWithProvider(ui, preloadedState = {}) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      courses: coursesReducer,
      notifications: notificationsReducer,
    },
    preloadedState,
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

// Mock l'appel API
jest.spyOn(courseSlice, 'fetchCourses').mockImplementation(() => () => {});

describe('CourseList component', () => {
  test('renders without crashing', async () => {
    const preloadedState = {
      auth: {
        user: { email: 'test@example.com', password: '12345678' },
        isLoggedIn: true,
      },
      courses: {
        courses: [
          { id: 1, name: 'ES6', credit: 60 },
          { id: 2, name: 'WebPack', credit: 20 },
          { id: 3, name: 'React', credit: 40 },
        ],
      },
    };

    renderWithProvider(<CourseList />, preloadedState);
    const title = await screen.findByText(/Available courses/i);
    expect(title).toBeInTheDocument();
  });

  test('renders correct number of rows when courses are available', () => {
    const preloadedState = {
      auth: {
        user: { email: 'test@example.com', password: '12345678' },
        isLoggedIn: true,
      },
      courses: {
        courses: [
          { id: 1, name: 'ES6', credit: 60 },
          { id: 2, name: 'WebPack', credit: 20 },
          { id: 3, name: 'React', credit: 40 },
        ],
      },
    };

    renderWithProvider(<CourseList />, preloadedState);
    const rows = screen.getAllByRole('row');
    // 2 headers + 3 courses = 5 rows
    expect(rows).toHaveLength(5);
  });

  test('renders fallback when no courses available', () => {
    const preloadedState = {
      auth: {
        user: { email: 'test@example.com', password: '12345678' },
        isLoggedIn: true,
      },
      courses: {
        courses: [],
      },
    };

    renderWithProvider(<CourseList />, preloadedState);
    const noCoursesRow = screen.getByText(/no course available yet/i);
    expect(noCoursesRow).toBeInTheDocument();
  });
});
