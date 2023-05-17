function echo(name, number) {
  if (number !== 0) {
    console.log(name);
    echo(name, number - 1);
  }
}

echo("shinta", 3);
