FROM teracy/angular-cli

# Create a directory where our app will be placed
ENV HOME=/usr/src/cafcul-frontend
RUN mkdir $HOME
WORKDIR $HOME

# Creates Project
# RUN ng new cafcul-frontend

# Copy dependency definitions
COPY ./cafcul-frontend/package.json $HOME

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY ./cafcul-frontend/ $HOME

# Expose the ports the app runs in
EXPOSE 4200
EXPOSE 49153