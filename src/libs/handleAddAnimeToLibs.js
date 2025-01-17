import toast from "react-hot-toast";

export const handleAddAnimeToLibrary = (e, status, data, mutate) => {
  e.preventDefault();
  e.stopPropagation();

  if (!data.email) return toast.error("please login firts!");

  const fixData = { ...data, status };

  const toastId = toast.loading("Adding anime...");

  mutate(fixData, {
    onSuccess: () => {
      toast.dismiss(toastId);
      toast.success("Anime added successfully!");
    },
    onError: (response) => {
      const { response: result } = response;

      if (result?.data.status === 409) {
        toast.dismiss(toastId);
        return toast.error("anime already in library.");
      }
      toast.dismiss(toastId);
      return toast.error("Failed to add anime.");
    },
  });

  return null;
};
