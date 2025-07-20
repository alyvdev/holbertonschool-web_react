import NotificationItem from "./NotificationItem";
import { render, screen, fireEvent } from "@testing-library/react";

test('Check whether the li element has the color blue, and the the attribute data-notification-type set to default', () => {
  render(<NotificationItem type="default" value="Test notification" />);
  const li = screen.getByText('Test notification');

  expect(li).toBeInTheDocument();
  expect(li).toHaveAttribute('data-notification-type', 'default');
  expect(li).toHaveStyle('color: blue');
});

test('Check whether the li element has the color red, and the the attribute data-notification-type set to urgent', () => {
  render(<NotificationItem type="urgent" value="Test urgent notification" />);
  const li = screen.getByText('Test urgent notification');

  expect(li).toBeInTheDocument();
  expect(li).toHaveAttribute('data-notification-type', 'urgent');
  expect(li).toHaveStyle('color: red');
});

test('calls markAsRead with correct id on click', () => {
  const mockMarkAsRead = jest.fn();
  render(
    <NotificationItem
      id={42}
      type="default"
      value="Clickable notification"
      markAsRead={mockMarkAsRead}
    />
  );

  const li = screen.getByText('Clickable notification');
  fireEvent.click(li);

  expect(mockMarkAsRead).toHaveBeenCalledWith(42);
});
