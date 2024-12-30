import os
import zipfile

ZIP_NAME = 'Osekai Medal Linker.zip'

exclude_files = [ZIP_NAME, 'build.py', '.prettierrc', '.gitignore', 'README.md', 'icon.psd']
exclude_folders = ['promotional', '.git', 'alt icon']

def zip_directory(directory_path, zip_path, exclude_files, exclude_folders):
    # Delete the previous zip file if it exists
    if os.path.exists(zip_path):
        os.remove(zip_path)
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(directory_path):
            # Exclude specified folders
            dirs[:] = [d for d in dirs if d not in exclude_folders]
            for file in files:
                if file not in exclude_files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, directory_path)
                    zipf.write(file_path, arcname)

    # Open the directory containing the zip file
    os.startfile(os.path.join(directory_path, ZIP_NAME))

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    zip_file_path = os.path.join(script_dir, ZIP_NAME)
    zip_directory(script_dir, zip_file_path, exclude_files, exclude_folders)