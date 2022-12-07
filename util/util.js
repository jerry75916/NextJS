import axios from "axios";

export const getAllEvent = async () => {
  const res = await axios.get("http://localhost:3001/").then((res) => res.data);
  return res;
};

export async function getEventById(id) {
  const alldata = await getAllEvent();
  return alldata.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const alldata = await getAllEvent();
  const { year, month } = dateFilter;

  let filteredEvents = alldata.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
