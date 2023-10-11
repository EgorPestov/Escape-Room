# Escape Room: a quest company website
by: Egor Pestov <egorpestov2012@yandex.ru>


---

<b>Stack:</b> JavaScript, TypeScript, React, Redux, Axios, Vite, Leaflet

---

<b>Escape Room</b>: a website of an organization specializing in conducting escape room quests. Thanks to its functionality, the website allows you to find a quest that suits your interests or matches your group's preferences. You can view detailed information about the quest, select a location on the interactive city map, and make a reservation.

<b>The website consists of the following pages:</b>

• <b>Home Page:</b> It displays all available quests offered by the organization, along with brief information about each and the ability to filter by genre and difficulty level.

• <b>Quest Page:</b> Clicking on a quest card leads users to a specific quest page with extensive information about it. Quest page provides detailed information about the quest, including a description, the number of possible participants, the difficulty level, and photos. It also features a 'Book Now' button.

• <b>Booking Page:</b> On this page, the user can select the quest's location on an interactive city map and provide detailed information about themselves and participants in a form with robust validation. The page is accessible only to authorized users.

• <b>Saved Bookings:</b> This page is accessible only to authorized users. It contains comprehensive information about all saved bookings, including the date, location, and details about the quest itself.

• <b>Authentication Page:</b> An authentication page for non-authorized users.

• <b>404 Error Page:</b> A page that displays when users attempt to access non-existent pages.

<b>Additional info:</b>

* The application's header is dynamically generated and, depending on the user's authentication status, displays different information.

* The map, based on Leaflet, dynamically transitions with animation when switching between different options. It highlights the selected option and show other nearby options that are loaded from the server.

* The project is initialized and built using Vite. The entire codebase is written in TypeScript, with React used for functional components.

* Server communication is managed through Axios and interceptors usage. 

* Redux slices are used as the state manager. Each slice of the store has its own actions, reducers, and, if necessary, extra reducers.

* Errors are handled both through interceptors and in asynchronous actions using try-catch constructions. For notifying users of errors, react-toastify is utilized.


