import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-refresher-5b16f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup)
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>Loading</section>;
  }
  return (
    <section>
      All Meetups
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
};

export default AllMeetupPage;
