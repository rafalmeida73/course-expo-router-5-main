'use server';

export async function myAction(counter: number) {
  console.log('my action');
  return counter + 1;
}
