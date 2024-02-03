export const registerUser = async (formData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in register (service) => ", error);
  }
};

export const loginUser = async (formData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in login (service) => ", error);
  }
};
