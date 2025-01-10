| ![Untitleddada](https://github.com/user-attachments/assets/be57faac-1d4f-4aa6-80de-c3c5787a1eb2) | 
|----------------------------------------------------------------------------------------------------|
| Full-Stack Development - One-Time Project |
| This was my first significant project in the tech world, built after experimenting with smaller projects where I explored the fundamentals of planning and organizing a complete development process. It marked a turning point in honing my skills and understanding the structure of a well-executed project. |
<table align="center">
  <tr>
    <td><img src="https://github.com/user-attachments/assets/077b6e54-95e7-43a6-a58d-34ec6213bfeb" width="600"/>
    <p style="text-align:center;">Products listing</td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="https://github.com/user-attachments/assets/49ef5ffc-069b-4810-a136-3272f389c235" width="600"/>
      <p style="text-align:center;">Cart</p>
    </td>
  </tr>
</table>

| **Feature**               | **Description**                                                                                                                                                                                                                                                                                                                                                         |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Object Detection**       | I used image recognition to locate specific objects on the screen by comparing screenshots stored in a defined folder. The program utilizes **pyautogui** and the **`locateOnScreen()`** function to search for images within a given region of the screen. The images are stored in a folder, and the program iterates through them to find matching objects on the screen with a specified confidence level. Once an object is detected, the program calculates its position, moves the cursor to it, performs a drag-and-drop action, and releases the mouse button. This process ensures a precise and efficient way to interact with the screen. |
| **Keyboard Listening**     | I implemented **pynput.keyboard** to monitor key presses and provide a toggle to start or stop the object search process. This functionality is useful to pause between search cycles and prevent CPU overload. For example, when there are no objects to search for, the program can be temporarily paused to save resources.                                          |
| **Defined Search Regions** | To optimize performance, I defined search regions on the screen, limiting the area in which the program searches for objects. Instead of performing a full-screen search, the search is constrained to specific areas (slots of interest), which significantly reduces processing time and speeds up the search.                                                       |
| **Threading for Efficiency** | I utilized **multithreading** (running multiple functions simultaneously) to speed up the object search. The program looks for 18 objects in total, dividing this task into 3 threads (using **`threading`** in Python). Each thread handles a specific set of images, creating a more efficient system and reducing search time. For example, the first thread searches objects 1-6, the second thread searches objects 7-12, and the third thread searches objects 13-18. |
| **Layered Architecture**   | The program is built using a **layered architecture**, which improves modularity and code maintainability. The application is structured as follows: <br> **UI** (User Interface): Allows the user to interact with the application. <br> **Operations** (Script Code): Contains the main logic of the application, such as searching and identifying objects. <br> **Targets** (Searched Images): These are the reference images that need to be recognized on the screen. <br> **Arguments** (Defined Parameters): Parameters are managed separately to allow easy adjustment of the application's behavior.  |
