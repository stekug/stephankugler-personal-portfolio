"use server";

export async function saveMessage(formData: FormData) {
  console.log("Message saved!");
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log(rawFormData);
}
