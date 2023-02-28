export default function Header() {
    const header = {
      headers: {
        Authorization: `Bearer `,
        Accept: "application/json",
      },
    };
    return header;
  }
  