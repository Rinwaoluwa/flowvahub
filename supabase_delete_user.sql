-- Create a function to allow users to delete their own account
create or replace function delete_user()
returns void
language plpgsql
security definer
as $$
begin
  -- Delete the user from auth.users (this will cascade to profiles if set up, or profiles can be deleted manually first)
  delete from auth.users
  where id = auth.uid();
end;
$$;
