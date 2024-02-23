export default function ErrorMessage({message, trigger}) {
  return (
    <p
      style={{
        color: "red",
        border: true,
        borderWidth: "2px",
        borderColor: "red",
      }}
      hidden={!trigger}
    >
      {message}
    </p>
  );
}
