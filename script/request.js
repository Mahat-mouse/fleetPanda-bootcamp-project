async function handlePostRequest(url, data) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Response Data:", responseData); // Debugging line
  
      return serializeLoginData(responseData, data);
    } catch (error) {
      // Handle network or other errors
      console.error("Error during POST request:", error);
      return {
        success: false,
        message: "An error occurred during the POST request.",
      };
    }
  }
  
  async function handleGetRequest(url) {
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Response Data:", responseData); // Debugging line
  
      return serialize(responseData);
    } catch (error) {
      console.error("Error during GET request:", error);
      return {
        success: false,
        message: "An error occurred during the GET request.",
      };
    }
  }
  
  function serialize(data) {
    // Ensure 'data' is an array before calling map
    if (!Array.isArray(data)) {
      console.error("Data to serialize is not an array");
      return [];
    }
  
    return data.map((datum) => {
      return {
        userId: datum["userId"],
        blogTitle: datum["title"],
        blogDescription: datum["body"],
      };
    });
  }
  
  function serializeLoginData(apiData, data) {
    if (!apiData || apiData.error) {
      return {
        success: false,
        message: apiData?.error || "User not found!",
      };
    }
  
    if (!apiData.token) {
      console.error("Token is undefined!");
      return {
        success: false,
        message: "Token is undefined!",
      };
    }
  
    return {
      success: true,
      userEmail: data.email,
      userToken: apiData.token,
    };
  }
  
  export async function handleRequest(url, method = "GET", data = {}) {
    switch (method) {
      case "POST":
        return handlePostRequest(url, data);
      case "GET":
        return handleGetRequest(url);
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  }
  