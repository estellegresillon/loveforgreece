export const onCursorMove = (e, container, cursor, offset) => {
  const relX = e.pageX - container.offsetLeft - offset;
  const relY = e.pageY - container.offsetTop - offset;
  cursor.style.left = relX + "px";
  cursor.style.top = relY + "px";
};

export const toggleCursor = (cursor, number) => {
  cursor.style.opacity = number;
};
