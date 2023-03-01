import { api } from "./utils/api";

export function Page() {
  const { mutate, isLoading, error } = api.user.useMutation();

  const handleMutate = () => {
    // it only fails if we
    mutate({
      email: "wlad@test.com",
      password: "123",
    });
    // @ts-expect-error - ❌ This type should not fail
    mutate({
      // email: "wlad@test.com",
      password: "123",
    });
  };

  return (
    <div>
      <button onClick={handleMutate} disabled={isLoading}>
        mutate
      </button>
      {error?.data?.zodError?.fieldErrors.title && (
        <span className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}
    </div>
  );
}
