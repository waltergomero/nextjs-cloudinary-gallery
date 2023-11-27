import { deleteImage } from "@/app/actions/galleryActions";
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export function DeleteImage({ public_id}) {

  const deleteImageWithId = deleteImage.bind(null, public_id);
  return (
    <form action={deleteImageWithId}>
      <button className="rounded-md border p-1 bg-gray-100 absolute top-2 right-2 ">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
